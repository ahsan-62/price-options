import { LineChart, Line,XAxis,YAxis } from 'recharts';

const ChartShow = () => {
    const data = [
        { month: 'January', newMembers: 30, activeMembers: 200 },
        { month: 'February', newMembers: 50, activeMembers: 220 },
        { month: 'March', newMembers: 45, activeMembers: 210 },
        { month: 'April', newMembers: 60, activeMembers: 230 },
        { month: 'May', newMembers: 70, activeMembers: 250 },
        { month: 'June', newMembers: 80, activeMembers: 260 },
        { month: 'July', newMembers: 90, activeMembers: 280 },
        { month: 'August', newMembers: 100, activeMembers: 300 },
        { month: 'September', newMembers: 85, activeMembers: 290 },
        { month: 'October', newMembers: 75, activeMembers: 270 },
        { month: 'November', newMembers: 65, activeMembers: 250 },
        { month: 'December', newMembers: 55, activeMembers: 240 },
      ];
    return (
        <div>
            <LineChart width={500} height={300} data={data} >
                <Line type="monotone" dataKey="newMembers" stroke="red" />
                <Line type="monotone" dataKey="activeMembers" stroke="green"  />

                <XAxis dataKey="month" />
                <YAxis />

            </LineChart>

            
        </div>
    );
};

export default ChartShow;