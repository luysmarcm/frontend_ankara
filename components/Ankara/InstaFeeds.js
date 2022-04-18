import {useState, useEffect} from "react";
import Feed from "./Feed";

const InstaFeeds = ({...props}) => {
    const [feeds, setFeedsData] = useState([]);

    useEffect(() => {
        fetch(
					`https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&limit=${props.limit}&access_token=IGQVJYTVZAiRHV2djFReTc1QUVlR0VJMlJGY1lEWFF0M25pMWRlLWtnM2dUdlhzekQzSEdxa0VkQ3J0MWNBcHRkb185bVhncURBUTc1ZAGJMYVhLT1FpNzlnQTVBaUxhUklfZADhmX2cwQkpmZA1h3VEpQNgZDZD`
				)
					.then((res) => res.json())
					.then((resp) => {
						setFeedsData(resp.data);
					})
					.catch((err) => {
						console.log(err.message);
					});
    }, [props.limit]);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-around">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
};

export default InstaFeeds;
