import React from "react";
import PropTypes from "prop-types";
// Imgs
import errorAvatar from "img/errorAvatar.png";
import ipfsLogo from "img/IPFS-badge-small.png";
import defaultAvatar from "img/defaultAvatar.png";
// Utility components
import Card from "components/Card";
import Button from "components/Button";
import { stringIncludes, capitalize } from "utils/strings";

function DnpStore({ directory, openDnp }) {
  return (
    <div className="dnp-cards">
      {directory.map(dnp => {
        const { manifest, error, avatar = defaultAvatar, origin, tag } =
          dnp || {};
        const { name, description, keywords = [] } = manifest || {};
        /* Show the button as disabled (gray) if it's updated */
        const disabled = stringIncludes(tag, "updated");
        /* Rename tag from "install" to "get" because there were too many "install" tags 
           Cannot change the actual tag because it is used for logic around the installer */
        const tagDisplay = tag === "INSTALL" ? "GET" : tag;
        const nameFormated = capitalize(name || "").replace(
          ".dnp.dappnode.eth",
          ""
        );

        return (
          <Card
            key={name + origin}
            className="dnp-card"
            shadow
            onClick={() => openDnp(dnp.name)}
          >
            <img src={error ? errorAvatar : avatar} alt="avatar" />
            <div className="info">
              <h5 className="title">{nameFormated}</h5>
              <div>{description}</div>
              <div className="keywords">
                {origin && typeof origin === "string" ? (
                  <div className="ipfs">
                    <img src={ipfsLogo} alt="ipfs" />
                    <span>{origin.replace("/ipfs/", "")}</span>
                  </div>
                ) : (
                  keywords.join(", ") || "DAppNode package"
                )}
              </div>
              <Button variant="dappnode" pill disabled={disabled}>
                {tagDisplay}
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

DnpStore.propTypes = {
  directory: PropTypes.array.isRequired,
  openDnp: PropTypes.func.isRequired
};

// Use `compose` from "redux" if you need multiple HOC
export default DnpStore;
