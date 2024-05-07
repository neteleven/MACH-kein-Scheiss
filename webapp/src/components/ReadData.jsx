import styles from "../App.module.scss";
import { useEffect, useState } from "react";

export const ReadData = ({ availableFields, baseUrl }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [baseUrl]);

  return (
    <div>
      <h1>Read Data</h1>
      <div className={styles.cards}>
        {data.map((user) => (
          <div className={styles.card} key={user.id}>
            <div className={styles.cardHead}>{user.id}</div>
            <div className={styles.cardContent}>
              {availableFields.map((field) => (
                <div className={styles.attribute} key={field}>
                  <div className={styles.attributeName}>{field}</div>
                  <div className={styles.attributeValue}>{user[field]}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
