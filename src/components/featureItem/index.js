function FeatureItem(props){      //  hum nay LandingPage may jo map kay zary ye attribute ye props bani hai is name sy  data={item} wo hum  ye props may maly gi 
    return(
        <div>                                 
            <p>icon:{props.data.icon}</p>
            <p>title:{props.data.title} </p>
            <p>description:{props.data.description}</p>
        </div>

    );
}
export default FeatureItem;