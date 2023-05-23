import { useQuery, gql } from '@apollo/client';


export const GET_COUNTRIES = gql`

    query ($code: ID!){

        continent(code: $code){
        countries{
            name 
            code
            emoji
        }
        }
    }
`;
