import React from 'react';
import './PostDisplay.css';

function PostDisplay({ doVote, toggleEdit, deletePost, post }) {
	const { title, description, body, votes } = post;

	return (
		<div className='PostDisplay'>
			<div>
				<h2>{title}</h2>
				<p>
					<i>{description}</i>
				</p>
				<div>{body}</div>
			</div>

			<div className='PostDisplay-right'>
				<div className='PostDisplay-edit-area'>
					<i className='fas fa-edit text-primary' onClick={toggleEdit} />
					<i className='fas fa-times text-danger' onClick={deletePost} />
				</div>
				<div className='PostDisplay-votes mt-2'>
					<b>{votes} votes:</b>

					<i className='fas fa-thumbs-up text-success' onClick={() => doVote('up')} />
					<i className='fas fa-thumbs-down text-danger' onClick={() => doVote('down')} />
				</div>
			</div>
		</div>
	);
}

export default PostDisplay;
