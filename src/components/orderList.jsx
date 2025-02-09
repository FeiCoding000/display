// OrderList.js
import React, { useEffect, useState } from "react";
import { database, ref, onValue } from "../config/firebase"
import "./orderList.css"; // 引入 CSS 样式

const OrderList = () => {
  const [orders, setOrders] = useState({});
  const [completedOrders, setCompletedOrders] = useState(
    JSON.parse(localStorage.getItem("completedOrders")) || []
  );

  // 监听 Firebase 实时数据
  useEffect(() => {
    const ordersRef = ref(database, "Orders");
    onValue(ordersRef, (snapshot) => {
      if (snapshot.exists()) {
        setOrders(snapshot.val());
      } else {
        setOrders({});
      }
    });
  }, []);

  // 标记订单为完成
  const handleComplete = (orderId) => {
    const newCompletedOrders = [...completedOrders, orderId];
    setCompletedOrders(newCompletedOrders);
    localStorage.setItem("completedOrders", JSON.stringify(newCompletedOrders));
  };

  return (
    <div className="order-list">
      {Object.entries(orders).map(([id, order]) => (
        <div
          key={id}
          className={`order-card ${completedOrders.includes(id) ? "completed" : ""}`}
        >
          <h3>#{id} | {order.type}</h3>
          <hr />
          <div>
            <span className="tag" >Customer: {order.customerName} </span>
          </div>
          <h4 className="tag">Client: {order.isClient? "Yes":"No"} </h4>

          <div className="order-tags">
            <span className={order.isIced ? "tag iced" : "tag warm"}>
              {order.isIced ? "Iced" : "Hot"}
            </span>
            {order.isDecaf && <span className="tag">Decaf</span>}
            {order.isExtraHot && <span className="tag">Extra Hot</span>}
            <span className="tag">{order.milk}</span>
            <span className="tag">Strength: {order.strength}</span>
            <span className="tag">Sugar: {order.sugar}</span>
          </div>
          <span>{order.timeStamp}</span>

          {!completedOrders.includes(id) && (
            <button className="complete-btn" onClick={() => handleComplete(id)}>
              Mark as Completed
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderList;
