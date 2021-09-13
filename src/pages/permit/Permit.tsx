import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPermit } from "../../redux/actions/permitAction";
import { useSelector, useDispatch } from "react-redux";
import styles from "./permit.module.css";
import { CgExport } from "react-icons/cg";
import ButtonComponent from "../../components/Button/ButtonComponent";

export interface PermitProps {}

type PermitParams = {
  id: string;
};

const Permit: React.FC = () => {
  const { id } = useParams<PermitParams>();
  const dispatch = useDispatch();
  const permit: any = useSelector((state: any) => state.getPermit.s_permit);

  useEffect(() => {
    dispatch(getPermit(id));
  }, [dispatch, id]);

  return (
    <div className={styles.main_container}>
      {permit && (
        <>
          <div className={styles.title_container}>
            <span className={styles.list_title}>
              Permit - {permit[0].permit_}
            </span>
            <ButtonComponent text="Export">
              <CgExport />
            </ButtonComponent>
          </div>
          <div className={styles.detail_list}>
            <div className={styles.list_row}>
              <span>ID</span>
              <span>{permit[0].id}</span>
            </div>
            <div className={styles.list_row}>
              <span>Permit</span>
              <span>{permit[0].permit_}</span>
            </div>
            <div className={styles.list_row}>
              <span>Permit Type</span>
              <span>{permit[0].permit_type}</span>
            </div>
            <div className={styles.list_row}>
              <span>Review Type</span>
              <span>{permit[0].review_type}</span>
            </div>
            <div className={styles.list_row}>
              <span>Application Start Date</span>
              <span>{permit[0].application_start_date}</span>
            </div>
            <div className={styles.list_row}>
              <span>Issue Date</span>
              <span>{permit[0].issue_date}</span>
            </div>
            <div className={styles.list_row}>
              <span>Processing Time</span>
              <span>{permit[0].processing_time}</span>
            </div>
            <div className={styles.list_row}>
              <span>Street Name</span>
              <span>{permit[0].street_name}</span>
            </div>
            <div className={styles.list_row}>
              <span>Community Area</span>
              <span>{permit[0].community_area}</span>
            </div>
            <div className={styles.list_row}>
              <span>Work Description</span>
              <span>{permit[0].work_description}</span>
            </div>
            <div className={styles.list_row}>
              <span>Building Fee Paid</span>
              <span>{permit[0].building_fee_paid}</span>
            </div>
            <div className={styles.list_row}>
              <span>Building Fee Unpaid</span>
              <span>{permit[0].building_fee_unpaid}</span>
            </div>
            <div className={styles.list_row}>
              <span>Reported Cost</span>
              <span>{permit[0].reported_cost}</span>
            </div>
            <div className={styles.list_row}>
              <span>Total Fee</span>
              <span>{permit[0].total_fee}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Permit;
