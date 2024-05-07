import styles from "../App.module.scss";
import { useState } from "react";

export const WriteData = ({ availableFields, baseUrl }) => {
  const [formData, setFormData] = useState({});
  const [infoText, setInfoText] = useState(undefined);

  const onChangeInput = (event) => {
    console.log(!!event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value ? event.target.value : undefined,
    });
  };

  const submitData = () => {
    console.log(JSON.stringify(formData));
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((e) => {
      console.log(e);
      setFormData({});
      if (e.status === 200) {
        setInfoText("Data submitted successfully. Response Code " + e.status);
      } else {
        setInfoText("Data submission failed. Response Code " + e.status);
      }
    });
  };

  return (
    <div>
      <h1>Write Data</h1>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            {availableFields.map((field) => (
              <div className={styles.attribute} key={field}>
                <div className={styles.attributeName}>{field}</div>
                <div className={styles.attributeValue}>
                  <input
                    type="text"
                    name={field}
                    onChange={onChangeInput}
                    value={formData[field] || ""}
                  />
                </div>
              </div>
            ))}
          </div>
          {infoText && <div>{infoText}</div>}
          <button onClick={submitData}>Submit</button>
        </div>
      </div>
    </div>
  );
};
