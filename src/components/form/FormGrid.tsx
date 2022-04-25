import styled from "styled-components"
import { FormInfo } from "../../types/Info"
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

export const FormGrid = ({ dsInfo, setDSInfo }: FormInfo) => {
    const genders = ["male", "female", "other"];
    const themes = ["stone", "wind", "serpent", "love", "fire", "mist", "insect", "sound", "water", "sun", "lighting", "beast", "moon"];

    const handleChange = ({ target }: any) => {
        const { id, value } = target;
        setDSInfo({ ...dsInfo, [id]: value });
    }
    return (
        <FormGridWrapper>
            <div className="a">
                <label htmlFor="name">Name*</label>
                <Input maxLength={18} onChange={handleChange} value={dsInfo && dsInfo.name} type="text" name="name" id="name" />
            </div>
            <div className="b">
                <label htmlFor="age">Age*</label>
                <Input onChange={handleChange} value={dsInfo && dsInfo.age} type="number" name="age" id="age" />
            </div>
            <div className="c">
                <label htmlFor="gender">Gender*</label>
                <List onChange={handleChange} name="gender" id="gender">
                    <option value="---">----------------</option>
                    {genders.map((gender) => <option key={gender} selected={dsInfo.gender.toLowerCase() === gender} value={gender}>{gender.charAt(0).toUpperCase() + gender.slice(1)}</option>)}
                </List>

            </div>
            <div className="d">
                <label htmlFor="power">Power</label>
                <Input onChange={handleChange} value={dsInfo && dsInfo.power} type="text" name="power" id="power" />
            </div>
            <div className="e">
                <label htmlFor="emoji">Emoji</label>
                <EmojiPicker setDSInfo={setDSInfo} dsInfo={dsInfo} emoji={dsInfo && dsInfo.emoji} />
            </div>
            <div className="f">
                <label htmlFor="theme">Theme*</label>
                <List onChange={handleChange} name="theme" id="theme">
                    <option value="---">----------------</option>
                    {themes.map((theme) => <option key={theme} selected={dsInfo.theme.toLowerCase() === theme} value={theme}>{theme.charAt(0).toUpperCase() + theme.slice(1)}</option>)}
                </List>
            </div>
            <div className="g">
                <label htmlFor="photo">Photo URL*</label>
                <Input onChange={handleChange} value={dsInfo && dsInfo.photo} type="url" name="photo" id="photo" />
            </div>
            <div className="h">
                <label htmlFor="backstory">Backstory</label>
                <Textarea name="backstory" value={dsInfo && dsInfo.backstory} id="backstory" onChange={handleChange} />
            </div>
        </FormGridWrapper>
    )
}

