import AirQualityLineChart from "./AirQualityLineChart"
import CO2LineChart from "./CO2LineChart"
import DevicesCard from "./Devicescards"
import HumidityLineChart from "./HumidityLineChart"
import PieChartComponent from "./PieChartComponent"
import PM10LineChart from "./PM10LineChart"
import PM1LineChart from "./PM1LineChart"
import PM25LineChart from "./PM25LineChart"
import TemperatureLineChart from "./TemperatureLineChart"
import VOCsLineChart from "./VOCsLineChart"


const Home =()=>{
    return(<>
    <section>
<div className="flex gap-5 m-3">
    <DevicesCard/>
    <PieChartComponent/>
</div>
<div className="flex gap-5 m-3">
    <AirQualityLineChart/>
    <VOCsLineChart/>
</div>
<div className="flex gap-5 m-3">
    <HumidityLineChart/>
    <CO2LineChart/>
</div>
<div className="flex gap-5 m-3">
    <PM1LineChart/>
    <PM25LineChart/>
</div>
<div className="flex gap-5 m-3">
    <PM10LineChart/>
    <TemperatureLineChart/>
</div>
        </section>
        
        
        </>)

}
export default Home