

export default function Firebase() {

    function FinancialTips() {
        fetch('https://budget-tracker-ba2ae-default-rtdb.firebaseio.com/tips.json',
        {
            method: 'POST',
            body: JSON.stringify(), 
            headers: {
                'Content-Type': "application/json"
            }

        })
    }
  return (
    <div>
      
    </div>
  )
}
