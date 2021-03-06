import { Outlet } from "react-router-dom"
import { Core } from "./Core"
import { Intro } from "./Intro"

export const Template = () => {
    return (
        <>
            <Intro />
            <Core>
                <Outlet />
            </Core>
        </>
    )
}
