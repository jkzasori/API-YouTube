import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

	const imageURL = video.snippet.thumbnails.default.url;

	return (
						<li onClick={() => onVideoSelect(video)} className="list-group-item">{/* it takes the props from videoList, when the user clicks on the li we call the function onVideoSelect*/}
							<div className="video-list media">
								<div className="media-left">
									<img className="media-object"  src={imageURL}/>
								</div>

								<div className="media-body">
									<div className="media-heading">
										{video.snippet.title}
									</div>
								</div>
							</div>
							
						</li>
					)
};

export default VideoListItem;