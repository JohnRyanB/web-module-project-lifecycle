import React from "react";

class Card extends React.Component {
	render() {
		const { card, followers } = this.props;
		const alt = `${card.login}'s Github avatar`;
		console.log(followers);
		return (
			<div className="Card">
				<img src={card.avatar_url} alt={alt} />
				<br></br>
				<a href={card.html_url}>{card.login}'s Github!</a>
				<p className="Bio">{card.bio}</p>
				<div className="Follow">
					<p>Followers:</p>
					<span className="Fnumber">{card.followers}</span>
					<p>Following:</p>
					<span className="Fnumber">{card.following}</span>
				</div>
				<div className="Orgs">
					<a href={card.repos_url}>{card.login}'s Repos</a>
					<a href={card.organizations_url}>{card.login}'s Organizations</a>
				</div>

				<div className="DisplayFollowers">
					<h3>{card.login}'s Followers:</h3>
					{followers.length >= 1 ? (
						followers.map((f) => {
							return <p className="FollowerList">{f}</p>;
						})
					) : (
						<p className="FollowerList">Has no followers</p>
					)}
				</div>
			</div>
		);
	}
}

export default Card;
