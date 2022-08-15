import axios from "axios";
import LINK from "./Link";

export default async function UpdateProfile(updateBody, token) {
    const headers = {
        headers: {
            Authorization: token
        }
    }
    try {
        const response = await axios.patch(LINK + "/api/v1/user", updateBody, headers);
        return response.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}
