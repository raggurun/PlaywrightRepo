import axios from "axios";
import { create } from "domain";

let emailId = 'ragu123@aol.in'
let endpoint = 'https://aol-team-ercp618l.atlassian.net/rest/api/2/issue/'
let apiToken = 'Token here'
let apikey = 'PA2'
async function createJiraIssue(summary: string, description: string, issueType: string) {

    const bodyData = {
        "fields": {
            "project": {
                "key": apikey
            },
                "summary": summary,
                "description": description,
                "issuetype": {
                    "name": issueType
                },
                assignee: {
                    "id": "60ddc81c2a1e950069d9e211"
            }
        }
        };

        //API call to create issue
        const response = await axios.post(endpoint, bodyData, {
            headers: {
                'Content-Type': 'application/json'
            },
            auth: {
                username: emailId,
                password: apiToken
            }
        });
    }

    createJiraIssue("Issue created via API", "This issue was created using Jira REST API", "Task")
