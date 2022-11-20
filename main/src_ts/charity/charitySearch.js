import fetch from 'node-fetch';

const id = 3
//
// type Charity = {
//   search_input: string;
// };
//
// type GetCharityResponse = {
//   data: Charity[];
// };

export default class charitySearch() {

    constructor() {
    }

    async function getCharities(user_input) {
      try {
        // 👇️ const response: Response
        const url = "https://api.data.charitynavigator.org/v2"
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            "app_id": "9d76dfff",
            "app_key": process.env.API_KEY,
            "pageSize": 5,
            "search": user_input,
            "searchType": "DEFAULT",
            "fundraisingOrgs": true,
          },
        })

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: GetUsersResponse
//         const result = (await response.json()) as GetCharityResponse;
        const result = (await response.json());

        console.log('result is: ', result);
        console.log('result as string is: ', JSON.stringify(result, null, 4));

        return result;
      } catch (error) {
        if (error instanceof Error) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
    }
}
