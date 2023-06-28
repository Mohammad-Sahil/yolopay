// import faker from 'faker';

function FakerData() {
    function getRandomDate(start, end) {
        const startDate = new Date(start).getTime();
        const endDate = new Date(end).getTime();
        const randomTime = Math.random() * (endDate - startDate) + startDate;
        return new Date(randomTime);
    }

    // Array to store the generated objects
    const data = [];

    // Budget names and names
    const budgetNames = ['Software subscription', 'Memberfive'];
    const names = ['Mixmax', 'Linkedin', 'Marketing ads', 'Offsite event', 'Travel allowance', 'AWS card', 'Netflix'];

    // Generate objects
    for (let i = 0; i < 100; i++) {
        const owner_id = Math.floor(Math.random() * 100) + 1;
        const name = names[Math.floor(Math.random() * names.length)];
        const budget_name = budgetNames[Math.floor(Math.random() * budgetNames.length)];
        const card_type = Math.random() < 0.5 ? 'burner' : 'subscription';
        const expiry = getRandomDate('2021-02-09', new Date()).toDateString();
        const spentValue = Math.floor(Math.random() * 701) + 300; // Random value between 300 and 1000
        const spent = {
            value: spentValue,
            currency: 'SGD'
        };
        const available_to_spend = {
            value: 1000 - spentValue,
            currency: 'SGD'
        };

        const obj = {
            name,
            budget_name,
            owner_id,
            spent,
            available_to_spend,
            card_type,
            expiry,
            limit: 100,
            status: 'active'
        };

        data.push(obj);
    }

    console.log(data);
    return (
        <div>FakerData</div>
    )
}

export default FakerData
