import styled from "styled-components"
import { EmojiPicker } from "./EmojiPicker"
import { Input } from "./Input"
import { List } from "./List"
import { Textarea } from "./Textarea"

const FormGridWrapper = styled.div`
    display:grid;
    
    grid-template: 
            "a b c" 105px
            "d e f" 105px
            "g g g" 105px 
            "h h h" 252px / 4fr 2fr 3fr;
    gap: 24px 20px;
    div{
        label{
            font-size: 24px;
            font-family: "Open Sans", sans-serif;
            margin-bottom: 4px;
            color: var(--black);
            display: block;
        }
    }
    .a{
        grid-area: a;
    }
    .b{
        grid-area: b;
    }
    .c{
        grid-area: c;
    }
    .d{
        grid-area: d;
    }
    .e{
        grid-area: e;
    }
    .f{
        grid-area: f;
    }
    .g{
        grid-area: g;
    }
    .h{
        grid-area: h;
    }
`

export const FormGrid = () => {
    const genders = ["male", "female", "other"];
    const themes = ["stone", "wind", "serpent", "love", "fire", "mist", "insect", "sound", "water", "sun", "lighting", "beast", "moon"];



    return (
        <FormGridWrapper>
            <div className="a">
                <label htmlFor="name">Name*</label>
                <Input type="text" name="name" id="name" required />
            </div>
            <div className="b">
                <label htmlFor="age">Age*</label>
                <Input type="number" name="age" id="age" required />
            </div>
            <div className="c">
                <label htmlFor="gender">Gender*</label>
                <List options={genders} />
            </div>
            <div className="d">
                <label htmlFor="power">Power</label>
                <Input type="text" name="power" id="power" />
            </div>
            <div className="e">
                <label htmlFor="emoji">Emoji</label>
                <EmojiPicker />
            </div>
            <div className="f">
                <label htmlFor="theme">Theme*</label>
                <List options={themes} />
            </div>
            <div className="g">
                <label htmlFor="picture">Picture*</label>
                <Input type="url" name="picture" id="picture" required />
            </div>
            <div className="h">
                <label htmlFor="backstory">Backstory</label>
                <Textarea />
            </div>
        </FormGridWrapper>
    )
}

