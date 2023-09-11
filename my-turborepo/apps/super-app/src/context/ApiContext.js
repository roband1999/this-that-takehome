import React, { createContext, useState } from "react";
import Api from "@/controllers/api";

const ApiContext = createContext(undefined);

function ApiProvider({ children }) {
    const [api, setApi] = useState(new Api());

    return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export { ApiProvider, ApiContext };
