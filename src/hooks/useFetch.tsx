import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";


const useFetch = () => {
  useEffect(() => {
    const getPermitData = async () => {
      await axios.get(
        "https://data.cityofchicago.org/resource/ydr8-5enu.json?$select=id,permit_,permit_type,street_name&$limit=5&$order=issue_date DESC"
      );
      // setTableData()
    };
    getPermitData();
  }, []);
};

export default useFetch;
