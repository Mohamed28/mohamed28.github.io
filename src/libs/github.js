import Auth from "../../auth.json"

export default class Ajax {
    static async fetch(url, type = "", method = "GET") {
        try {
            const response = await fetch(url, { headers: { authorization: `token ${Auth.token}` } })

            if (response.status != 200) return []

            const JSONResponse = await response.json();

            const repos = JSONResponse.filter(repo => {
                if (repo.has_pages) {
                    return {
                        name: repo.name.split(/[^a-zA-Z0-9]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
                        url: repo.name
                    }

                    // curl -X GET -u Mohamed28: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 https://api.github.com/users/mohamed28/repos > repos.json 
                }
            })

            console.log(repos)

        } catch (e) {
            return [];
        }
    }
}