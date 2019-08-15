const products = [
    {
        name: 'Nike VaporFly 4% Flyknit',
        price: 250,
        image: 'https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/acmoik7t1kfbprm8hsqs/vaporfly-4-flyknit-unisex-running-shoe-v7G3FB.jpg'
    },
    {
        name: 'Nike Air Zoom Streak 7',
        price: 110,
        image: 'https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/wzip1kmsincbabhpd7pv/air-zoom-streak-7-running-shoe-hH8tqV.jpg'
    },
    {
        name: 'Nike Zoom Strike 2',
        price: 80,
        image: 'https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/u59cs74dgkdhetaemtmj/zoom-strike-2-mens-running-shoe-nZdQVl.jpg'
    },
    {
        name: 'Nike Flex Control 3',
        price: 65,
        image: 'https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/pnluwtqe96gpmgyytudy/flex-control-3-mens-training-shoe-0mfb5L.jpg'
    },
    {
        name: 'Nike Varsity Compete Trainer',
        price: 70,
        image: 'https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/tri2vflm8rti8sgwvaun/varsity-compete-trainer-mens-gym-sport-training-shoe-pbAL1W.jpg'
    },
]

module.exports = {
    getProducts: (req,res) => {
        res.status(200).json(products)
    }
}