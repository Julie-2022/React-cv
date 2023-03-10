import React, { Component } from "react"
import ProgressBar from "./ProgressBar"

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Html", xp: 0.75 },
      { id: 2, value: "Css", xp: 0.75 },
      { id: 3, value: "Javascript", xp: 0.75 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.75 },
      { id: 2, value: "Bootstrap", xp: 0.5 },
      { id: 3, value: "Sass", xp: 0.75 },
    ],
  }

  render() {
    let { languages, frameworks } = this.state

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    )
  }
}
export default Languages
