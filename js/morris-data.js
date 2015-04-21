$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Produce: 2666,
            Canned: null,
            Dry_Goods: 2647
        }, {
            period: '2010 Q2',
            Produce: 2778,
            Canned: 2294,
            Dry_Goods: 2441
        }, {
            period: '2010 Q3',
            Produce: 4912,
            Canned: 1969,
            Dry_Goods: 2501
        }, {
            period: '2010 Q4',
            Produce: 3767,
            Canned: 3597,
            Dry_Goods: 5689
        }, {
            period: '2011 Q1',
            Produce: 6810,
            Canned: 1914,
            Dry_Goods: 2293
        }, {
            period: '2011 Q2',
            Produce: 5670,
            Canned: 4293,
            Dry_Goods: 1881
        }, {
            period: '2011 Q3',
            Produce: 4820,
            Canned: 3795,
            Dry_Goods: 1588
        }, {
            period: '2011 Q4',
            Produce: 15073,
            Canned: 5967,
            Dry_Goods: 5175
        }, {
            period: '2012 Q1',
            Produce: 10687,
            Canned: 4460,
            Dry_Goods: 2028
        }, {
            period: '2012 Q2',
            Produce: 8432,
            Canned: 5713,
            Dry_Goods: 1791
        }],
        xkey: 'period',
        ykeys: ['Produce', 'Canned', 'Dry_Goods'],
        labels: ['Produce', 'Canned_Goods', 'Dry_Goods'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
