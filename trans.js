document.querySelector("body").onclick = () => {
    // const editButtons = document.querySelectorAll("#edit-button");
    // editButtons[0].click();
    
    let subtitles = [];

    document.querySelectorAll("ytve-captions-editor-caption-segment-line").forEach((row, i) => {

        row.querySelectorAll("textarea").forEach((textarea) => {
            textarea.value && subtitles.push({
                text: textarea.value
            });
        });

        const times = row.querySelector(".segment-timings-container").querySelectorAll("#display");
        subtitles[i].start = times[0].innerHTML;
        subtitles[i].end   = times[1].innerHTML;
        // row.querySelectorAll("ytcp-media-timestamp-input").forEach((timestamp) => {
        //     const time = timestamp.querySelector("#display");
        //     console.log(time.innerText, i);
        // });
        
    });

    console.log(subtitles);
}