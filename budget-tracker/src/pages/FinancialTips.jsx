import { useEffect, useState } from 'react';
import classes from './FinancialTips.module.css';
import { FinancialTipsData } from '../components/FInanicalTipsData';

function FinancialTips() {
  const [data, setData] = useState([]);
 

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.finTips}>
      <h1 className={classes.title}>Smart Money Moves: Your Guide to Financial Well-being</h1>
      <div className={classes.tipContainer}>
        {FinancialTipsData.map((item, index) => (
          <div key={index} className={classes.tipCard}>
            <img src={item.imageUrl} alt={`Tip ${index + 1} Image`} className={classes.image} />
            <p className={classes.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinancialTips;
