import React from "react";
import Card from "../../components/Card/Card";
import {
  HiOutlineClock,
  HiOutlineXCircle,
  HiOutlineCheckCircle,
  HiOutlineBan,
} from "react-icons/hi";
import Table from "../../components/Table/Table";
import styles from "./dashboard.module.css";
import { useEffect } from "react";
import { getRecentPermits } from "../../redux/actions/permitAction";
import { useSelector, useDispatch } from "react-redux";
import { Permit } from "../../saga/handlers/fetchPermits";

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const dispatch = useDispatch();
  const permits: Permit[] = useSelector((state: any) => state.permit.permits);

  useEffect(() => {
    dispatch(getRecentPermits());
  }, [dispatch]);
  const cards = [
    {
      title: "Approved",
      amount: "23",
      background: "#68C6D3",
      icon: <HiOutlineCheckCircle size={50} />,
    },
    {
      title: "Pending",
      amount: "15",
      background: "#7480FD",
      icon: <HiOutlineClock size={50} />,
    },
    {
      title: "Declined",
      amount: "34",
      background: "#FF9191",
      icon: <HiOutlineBan size={50} />,
    },
    {
      title: "Cancelled",
      amount: "6",
      background: "#FF0000",
      icon: <HiOutlineXCircle size={50} />,
    },
  ];

  const tableHeaderData = [
    "ID",
    "Permit",
    "Permit Type",
    "Street Name",
    "Total Fee",
    "Date Issued",
  ];
  return (
    <div className={styles.main_content}>
      <div className={styles.main_content_header}>
        <span>Analytics</span>
      </div>
      <div className={styles.card_list}>
        {cards.map((card, index) => (
          <Card
            key={index}
            amount={card.amount}
            title={card.title}
            background={card.background}
          >
            {card.icon}
          </Card>
        ))}
      </div>
      <div className={styles.table_container}>
        <Table
          tableHeaders={tableHeaderData}
          tableData={permits}
          title="Recent Permits"
        />
      </div>
    </div>
  );
};

export default Dashboard;
