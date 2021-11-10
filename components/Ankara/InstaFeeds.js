import React, { useState, useEffect } from "react";
import axios from "axios";
import Feed from "./Feed";

const InstaFeeds = ({ ...props }) => {
	const [feeds, setFeedsData] = useState([]);

	useEffect(() => {
		async function fetchInstagramPost() {
			try {

				fetch(
					`https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&limit=${props.limit}&access_token=IGQVJYNEQwYVBHQXRCWXRuM3BjdllibTk2N3huVE11OTNhLTVqa1E4RENhSzMxWHlmUzNwRTlvUFBNNS1SNU9BLTRxNHNsc01iVDEtYU51eF9aQnRlTTZAWSWdpREdUOG5jbmxxT2FTejRjRU1vUUhldAZDZD`
				)
					.then((res) => {
						return res.json();
					})
					.then((data) => {
						console.log(data.data);
						setFeedsData(data.data)
					});
				
			} catch (err) {
				console.log("error", err);
			}
		}

		fetchInstagramPost();
	}, [props.limit]);

	console.log(feeds, "feeds");

	return (
		<section className="p-5  md:p-20 lg:p-32 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			{feeds.map((feed) => (
				<Feed key={feed.id} feed={feed} />
			))}
		</section>
	);
};

export default InstaFeeds;
