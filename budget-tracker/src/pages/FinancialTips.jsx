import { useEffect, useState } from 'react';
import classes from './FinancialTips.module.css';

function FinancialTips() {
  const [data, setData] = useState([]);
  const databaseURL = 'https://budget-tracker-ba2ae-default-rtdb.firebaseio.com/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(databaseURL);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();

        // Convert data object to an array or handle it as needed
        const dataArray = Object.values(jsonData);
        setData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.finTips}>
      <h1 className={classes.title}>Smart Money Moves: Your Guide to Financial Well-being</h1>
      <div className={classes.tipContainer}>
        {data.map((tipData, index) => (
          <div key={index} className={classes.tipCard}>
            <img src={tipData.image} alt={`Tip ${index + 1} Image`} className={classes.image} />
            <p className={classes.description}>{tipData.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinancialTips;
