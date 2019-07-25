import React from "react";
import "./styles.scss";

const UserCard = props => {
  const { adalabersList, selectedAdalaber } = props;
  if (selectedAdalaber !== "") {
    const adalaber = adalabersList.filter(
      adalaber => adalaber.login === selectedAdalaber
    );
    let currentAdalaber = adalaber[0];

    //Get dates to compare and print how many time passed since the profile was created
    let dateOfProfile = currentAdalaber.created_at;
    const parsedDateOfProfile = dateOfProfile.slice(0, 7);
    const parsedYearDateOfProfile = parsedDateOfProfile.slice(0, 4);
    const parsedMonthDateOfProfile = parsedDateOfProfile.slice(6, 7);

    let today = new Date();
    const parsedToday = today.toISOString();
    const actualYear = parsedToday.slice(0, 4);
    const actualMonth = parsedToday.slice(6, 7);

    let dateToPrint;
    if (actualYear === parsedYearDateOfProfile) {
      dateToPrint = actualMonth - parsedMonthDateOfProfile + " meses";
    } else if (
      actualYear === parsedYearDateOfProfile &&
      actualMonth - parsedMonthDateOfProfile === 1
    ) {
      dateToPrint = "1 mes";
    } else if (actualYear - parsedYearDateOfProfile === 1) {
      dateToPrint = "1 año";
    } else {
      dateToPrint = actualYear - parsedYearDateOfProfile + " años";
    }

    return (
      <React.Fragment>
        <section className="UserCard">
          <div
            className="UserCard__img"
            style={{ backgroundImage: `url(${currentAdalaber.avatar_url})` }}
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
                <i className="fas fa-map-marker-alt UserCard__location-ico" />
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
        <h2 className="UserCard__date">Miembro desde hace {dateToPrint}</h2>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default UserCard;
