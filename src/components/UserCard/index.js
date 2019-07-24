import React from "react";
import "./styles.scss";

const UserCard = props => {
  const { adalabersList, selectedAdalaber } = props;
  if (selectedAdalaber!==null) {
    const adalaber = adalabersList.filter(
      adalaber => adalaber.login === selectedAdalaber
    );
    let currentAdalaber = adalaber[0];

    return (
      <section className="UserCard">
        <div
          className="UserCard__img"
          src={currentAdalaber.avatar_url}
          alt={`Foto de ${currentAdalaber.login}`}
        />
        <div className="UserCard__info">
          <a
            href={currentAdalaber.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="UserCard__username"
          >
            @{currentAdalaber.login}
          </a>
          <h1 className="UserCard__name">{currentAdalaber.name}</h1>
          {currentAdalaber.location ? (
            <h2 className="UserCard__location">
              <i className="fas fa-map-marker-alt" />
              {currentAdalaber.location}
            </h2>
          ) : (
            ""
          )}
        </div>
        <div className="UserCard__GitHub">
          <div className="UserCard__GitHub-info">
            <span className="UserCard__GitHub-info-number">
              {currentAdalaber.public_repos}
            </span>
            <h2 className="UserCard__GitHub-info-text">Repos</h2>
          </div>
          <div className="UserCard__GitHub-info">
            <span className="UserCard__GitHub-info-number">
              {currentAdalaber.followers}
            </span>
            <h2 className="UserCard__GitHub-info-text">Followers</h2>
          </div>
          <div className="UserCard__GitHub-info">
            <span className="UserCard__GitHub-info-number">
              {currentAdalaber.following}
            </span>
            <h2 className="UserCard__GitHub-info-text">Following</h2>
          </div>
        </div>
      </section>
    );
  }
};

export default UserCard;
