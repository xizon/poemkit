import React, { Component } from 'react';
 
type GridColumnProps = {
    ratio?: string | boolean | undefined;
    stackRatio?: string | boolean | undefined;
    stackSize?: string | boolean | undefined;
    inline?: boolean | undefined;
};
type GridColumnState = false;


 
const gridColDivisions: string[] = [
    '1/1',
    '1/2',
    '1/3',
    '2/3',
    '1/4',
    '3/4',
    '1/5',
    '2/5',
    '3/5',
    '4/5',
    '1/6'
];
const gridWidths: any = [];

gridColDivisions.forEach(item => {
    const _fraction = item.split('/');
    const _n1 = parseFloat( _fraction[0] );
    const _n2 = parseFloat( _fraction[1] );

    if ( _n2 !== 5 ) {
        switch (_n1) {
            case 1:
                gridWidths.push({'ratio': item, 'class': "poemkit-core-grid__col-" + (12/_n2)});
                break;

            case 2:
            case 3:
            gridWidths.push({'ratio': item, 'class': "poemkit-core-grid__col-" + (12- 12/_n2)});
                break;


        }		
    } 
});

gridWidths.push({'ratio': "1/5", 'class': "poemkit-core-grid__col-2"});	
gridWidths.push({'ratio': "2/5", 'class': "poemkit-core-grid__col-5"});	
gridWidths.push({'ratio': "3/5", 'class': "poemkit-core-grid__col-7"});	
gridWidths.push({'ratio': "4/5", 'class': "poemkit-core-grid__col-10"});	

/*
    {ratio: "1/1", class: "poemkit-core-grid__col-12"}
    {ratio: "1/2", class: "poemkit-core-grid__col-6"}
    {ratio: "1/3", class: "poemkit-core-grid__col-4"}
    {ratio: "2/3", class: "poemkit-core-grid__col-8"}
    {ratio: "1/4", class: "poemkit-core-grid__col-3"}
    {ratio: "3/4", class: "poemkit-core-grid__col-9"}
    {ratio: "1/6", class: "poemkit-core-grid__col-2"}
    {ratio: "1/5", class: "poemkit-core-grid__col-2"}
    {ratio: "2/5", class: "poemkit-core-grid__col-5"}
    {ratio: "3/5", class: "poemkit-core-grid__col-7"}
    {ratio: "4/5", class: "poemkit-core-grid__col-10"}
*/



export default class GridColumn extends Component<GridColumnProps, GridColumnState> {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            ratio,
            stackRatio,
            stackSize,
            inline,
            children

        } = this.props; 

        let stackClassName = '';
        for (var i = 0; i < gridWidths.length; i++) {
            if (gridWidths[i].ratio === stackRatio) {
                stackClassName = ` ${gridWidths[i].class}--${stackSize}`;
                break;
            }
        }

        //
        const inlineClassName = inline ? ' poemkit-core-grid__inline' : '';

		return (
            <>


                {!ratio ? (
                    <div className="poemkit-core-grid__col">{children}</div>
                ) : gridWidths.map((item, index) => {
                        if (item.ratio === ratio) return (<div key={index} className={item.class + stackClassName + inlineClassName}>{children}</div>);
                    })
                }
                
            </>
          )
    }
}