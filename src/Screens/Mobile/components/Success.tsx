import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { userCheck } from "../../../components/userCheck";
import { Store } from "../../../Context/Store";
import { getData } from "../../../localStorage/getData";
import Loader from "../../../components/mobileLoader";
import IMG from "../../../assets/success.svg";
import { pathCheck } from "../../Helpers/Utlities";

const Success = () => {
    const [loading, setLoading] = useState(true);
    const { setUser } = useContext(Store);
    const loggedUser = getData("user");
    const history = useHistory();
    useEffect(() => {
        if (userCheck(history)) {
            setUser(loggedUser);
            setLoading(false);
        }
    }, []);
    return (
        <React.Fragment>
            {loading ? (
                <Loader />
            ) : (
                <div style={{ height: "80%", width: "100%" }}>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={IMG} width={200} height={200} />
                    </div>
                    <p
                        onClick={() => {
                            if (pathCheck(history, "/seller")) {
                                history.push("/seller");
                            }
                            history.push("/");
                        }}
                        style={{ alignItems: "center" }}
                    >
                        Click to go back
                    </p>
                </div>
            )}
        </React.Fragment>
    );
};

export default Success;
