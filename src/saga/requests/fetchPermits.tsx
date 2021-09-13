import axios from "axios"

const url = "https://data.cityofchicago.org/resource/ydr8-5enu.json?$select=id,permit_,permit_type,street_name,issue_date,total_fee&$limit=10&$order=issue_date DESC"

const extendedUrl = "https://data.cityofchicago.org/resource/ydr8-5enu.json?$select=id,permit_,permit_type,review_type,application_start_date,issue_date,processing_time,street_name,community_area,work_description,building_fee_paid,building_fee_unpaid,reported_cost,total_fee&$where=id == "

// "100212723"
export const fetchRecentPermits = async () => {
    const {data} = await axios.get(url)
    return data
};

export const fetchPermit = async (id:string) => {
    const {data} = await axios.get(extendedUrl + `'${id}'`)
    return data
}

export default fetchRecentPermits;