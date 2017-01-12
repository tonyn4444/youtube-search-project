import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, selectedVideo }) => {
	// map props.videos to VideoListItem as attribute

	const videoListItemArray = videos.map((video) => {
		return (
			<VideoListItem
				video={video}
				key={video.etag}
				selectedVideo={selectedVideo}
			/>
		);
	})

	return (
		<ul className="col-md-4 list-group">
			{videoListItemArray}
		</ul>
	)
}

export default VideoList;
