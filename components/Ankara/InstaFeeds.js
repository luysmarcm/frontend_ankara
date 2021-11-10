import React, {useState, useEffect} from "react";
import Feed from "./Feed";

const InstaFeeds = ({...props}) => {
    const [feeds, setFeedsData] = useState([]);

    useEffect(() => {
        fetch(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&limit=${props.limit}&access_token=IGQVJYNEQwYVBHQXRCWXRuM3BjdllibTk2N3huVE11OTNhLTVqa1E4RENhSzMxWHlmUzNwRTlvUFBNNS1SNU9BLTRxNHNsc01iVDEtYU51eF9aQnRlTTZAWSWdpREdUOG5jbmxxT2FTejRjRU1vUUhldAZDZD`
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
        <section className='p-5  md:p-20 lg:p-32 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </section>
    );
};

export default InstaFeeds;
