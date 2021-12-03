/**
 * Display the matched elements.
 *
 * @return {Void} 
 */
 function show(this: any) {
    this.each(function (this: any) {
        // use inherit so that your CSS controls block/flex/inline-block etc
        this.style.display = 'inherit';
    });
    return this;


}

export default show;