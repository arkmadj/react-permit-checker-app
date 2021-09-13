import React from "react";
import { CgExport } from "react-icons/cg";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonComponent from "../../components/Button/ButtonComponent";
import styles from "./table.module.css";
import { Permit } from "../../saga/handlers/fetchPermits";
import { Link } from "react-router-dom";

export interface TableProps {
  title: string;
  tableHeaders: string[];
  tableData?: Permit[];
}

const Table: React.FC<TableProps> = ({ title, tableHeaders, tableData }) => {
  return (
    <div>
      <div className={styles.table_title_container}>
        <span className={styles.table_title}>{title}</span>
        <div className={styles.table_actions}>
          <SearchBar placeholder="Search..." />
          <ButtonComponent text="Export">
            <CgExport />
          </ButtonComponent>
        </div>
      </div>
      <div className={styles.table_container}>
        <div className={styles.table_header}>
          {tableHeaders.map((header, index) => (
            <span key={index}>{header}</span>
          ))}
        </div>
        {tableData?.map((data, index) => (
          <div key={index} className={styles.table_row}>
            <Link to={`/permit/${data.id}`} className={styles.table_link}>
              <span>{data.id}</span>
              <span>{data.permit_}</span>
              <span>{data.permit_type}</span>
              <span>{data.street_name}</span>
              <span>{data.total_fee}</span>
              <span>{data.issue_date}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
