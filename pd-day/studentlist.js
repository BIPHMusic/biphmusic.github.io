const masterList = [
    //Tech Theater
    {"name": "Fiona", "liveschoolName": "Fiona Fangyuan Bi", "house": "Red", "birthdate": "2009-04-21", "altName": "Ffi-ona", "class": "Tech Theater", "addable": "no"},
    {"name": "Julius", "liveschoolName": "Julius Jinchen Che", "house": "Green", "birthdate": "2008-12-01", "altName": "Julius", "class": "Tech Theater", "addable": "no"},
    {"name": "Vlan", "liveschoolName": "Vlan Wai Lun Dong", "house": "Green", "birthdate": "2009-02-21", "altName": "Vlan", "class": "Tech Theater", "addable": "no"},
    {"name": "Beryl", "liveschoolName": "Tina Yantong Dong", "house": "Blue", "birthdate": "2007-12-21", "altName": "Barrel", "class": "Tech Theater", "addable": "no"},
    {"name": "Allen", "liveschoolName": "Allen He", "house": "Red", "birthdate": "2008-11-09", "altName": "Allen", "class": "Tech Theater", "addable": "no"},
    {"name": "Yolanda", "liveschoolName": "Yolanda Yuqian Li", "house": "Red", "birthdate": "2007-10-02", "altName": "Yolawnda", "class": "Tech Theater", "addable": "no"},
    {"name": "Stella", "liveschoolName": "Stella Yuxuan Li", "house": "Green", "birthdate": "2008-07-02", "altName": "Stella", "class": "Tech Theater", "addable": "no"},
    {"name": "Cynthia", "liveschoolName": "Cynthia Sum Chi Liaw", "house": "Green", "birthdate": "2008-12-19", "altName": "Cynthia", "class": "Tech Theater", "addable": "no"},
    {"name": "Yaffa", "liveschoolName": "Yaffa Hei Wun Luo", "house": "Green", "birthdate": "2008-09-22", "altName": "Yaffa", "class": "Tech Theater", "addable": "yes"},
    {"name": "Kenny", "liveschoolName": "Kenny Yuan Wang", "house": "Green", "birthdate": "2008-10-10", "altName": "Kenny", "class": "Tech Theater", "addable": "no"},
    {"name": "Eric", "liveschoolName": "Eric Yiru Zeng", "house": "Green", "birthdate": "2008-11-02", "altName": "Eric", "class": "Tech Theater", "addable": "no"},
    {"name": "Harry", "liveschoolName": "Harry Chak Hau Zhang", "house": "Yellow", "birthdate": "2007-12-12", "altName": "Harry", "class": "Tech Theater", "addable": "no"},
    {"name": "Aaliyah", "liveschoolName": "Aaliyah Hairuo Zhang", "house": "Yellow", "birthdate": "2007-08-10", "altName": "Aaliyah", "class": "Tech Theater", "addable": "no"},
    {"name": "Rachelle", "liveschoolName": "Rachelle Xinxin Zhang", "house": "Yellow", "birthdate": "2009-05-01", "altName": "Raciale", "class": "Tech Theater", "addable": "no"},
    {"name": "Kevin", "liveschoolName": "Kevin Haichen Zhao", "house": "Blue", "birthdate": "2009-01-15", "altName": "Kevin", "class": "Tech Theater", "addable": "no"},
    {"name": "Sophie", "liveschoolName": "Sophie Zhijia Zhuang", "house": "Yellow", "birthdate": "2007-10-29", "altName": "Sophie", "class": "Tech Theater", "addable": "no"},
    {"name": "Ricky", "liveschoolName": "Ricky Zong", "house": "Blue", "birthdate": "2009-04-20", "altName": "Ricky", "class": "Tech Theater", "addable": "no"},

    //AE
    {"name": "Shawn", "liveschoolName": "Shawn Chengkun Bi", "house": "Red", "birthdate": "2012-10-17", "altName": "Shawn", "class": "AE", "addable": "no"},
    {"name": "Arianna", "liveschoolName": "Arianna Sisi Chen", "house": "Green", "birthdate": "2012-12-04", "altName": "Arianna", "class": "AE", "addable": "no"},
    {"name": "Bella", "liveschoolName": "Bella Yaxi Chen", "house": "Red", "birthdate": "2012-02-06", "altName": "Bella", "class": "AE", "addable": "no"},
    {"name": "Rebecca", "liveschoolName": "Rebecca Tsz Yin Cheung", "house": "Blue", "birthdate": "2012-05-28", "altName": "Rebecca", "class": "AE", "addable": "no"},
    {"name": "Shine", "liveschoolName": "Shine Yu Duan", "house": "Blue", "birthdate": "2013-02-14", "altName": "Shine", "class": "AE", "addable": "no"},
    {"name": "Jonathan", "liveschoolName": "Jonathan Jiazhi Guo", "house": "Blue", "birthdate": "2012-08-23", "altName": "Jonathan", "class": "AE", "addable": "no"},
    {"name": "Olivia", "liveschoolName": "Olivia Xiaojun He", "house": "Yellow", "birthdate": "2013-08-30", "altName": "Olivia", "class": "AE", "addable": "no"},
    {"name": "Kim", "liveschoolName": "Kim Zhenting Lei", "house": "Blue", "birthdate": "2012-08-25", "altName": "Kim", "class": "AE", "addable": "no"},
    {"name": "Phyllis", "liveschoolName": "Phyllis Hang Wa Li", "house": "Red", "birthdate": "2012-11-26", "altName": "Phyllis", "class": "AE", "addable": "no"},
    {"name": "Laura", "liveschoolName": "Laura Qianhong Liu", "house": "Yellow", "birthdate": "2012-10-24", "altName": "Laura", "class": "AE", "addable": "no"},
    {"name": "Andy", "liveschoolName": "Andy Dongchen Shen", "house": "Yellow", "birthdate": "2012-11-22", "altName": "Andy", "class": "AE", "addable": "no"},
    {"name": "Kyla", "liveschoolName": "Kyla Shi", "house": "Red", "birthdate": "2013-03-25", "altName": "Kyla", "class": "AE", "addable": "no"},
    {"name": "Amanda", "liveschoolName": "Amanda Seoah Song", "house": "Green", "birthdate": "2012-04-01", "altName": "Amanda", "class": "AE", "addable": "no"},
    {"name": "Damon", "liveschoolName": "Damon Wenbo Song", "house": "Green", "birthdate": "2012-11-04", "altName": "Damon", "class": "AE", "addable": "no"},
    {"name": "Steve", "liveschoolName": "Steve Haoxuan Wang", "house": "Green", "birthdate": "2012-09-09", "altName": "Steve", "class": "AE", "addable": "no"},
    {"name": "Daisy", "liveschoolName": "Daisy Chenxi Wei", "house": "Red", "birthdate": "2012-01-25", "altName": "Daisy", "class": "AE", "addable": "no"},
    {"name": "Jason", "liveschoolName": "Jason Haoru Wu", "house": "Red", "birthdate": "2013-05-30", "altName": "Jason", "class": "AE", "addable": "no"},
    {"name": "Austen", "liveschoolName": "Austen Lihan Xie", "house": "Yellow", "birthdate": "2013-01-02", "altName": "Austen", "class": "AE", "addable": "no"},
    {"name": "Elon", "liveschoolName": "Elon Hekun Xie", "house": "Green", "birthdate": "2011-07-07", "altName": "Elon", "class": "AE", "addable": "no"},
    {"name": "Eva", "liveschoolName": "Eva Yu Han Xie", "house": "Blue", "birthdate": "2012-01-09", "altName": "Eva", "class": "AE", "addable": "no"},
    {"name": "William", "liveschoolName": "William Yang", "house": "Green", "birthdate": "2013-04-18", "altName": "William", "class": "AE", "addable": "no"},
    {"name": "Molly", "liveschoolName": "Molly Zimo Ye", "house": "Green", "birthdate": "2013-06-17", "altName": "Molly", "class": "AE", "addable": "no"},
    {"name": "Lucky", "liveschoolName": "Lucky Yukun Yuan", "house": "Green", "birthdate": "2013-01-19", "altName": "Lucky", "class": "AE", "addable": "no"},
    {"name": "Jerry", "liveschoolName": "Jerry Daoxun Zhang", "house": "Red", "birthdate": "2013-06-20", "altName": "Jerry", "class": "AE", "addable": "no"},
    {"name": "Bob", "liveschoolName": "Bob Zhou", "house": "Yellow", "birthdate": "2013-01-14", "altName": "Bob", "class": "AE", "addable": "no"},

    //AP Music Theory
    {"name": "Jocelyn", "liveschoolName": "Jocelyn Lan Bai", "house": "Blue", "birthdate": "2011-01-19", "altName": "Jocelyn", "class": "AP Music Theory", "addable": "no"},
    {"name": "Maggie", "liveschoolName": "Maggie Gan", "house": "Red", "birthdate": "2011-02-12", "altName": "Maggie", "class": "AP Music Theory", "addable": "no"},
    {"name": "Alex", "liveschoolName": "Alex Tsz To Huang", "house": "Blue", "birthdate": "2011-10-19", "altName": "Alex", "class": "AP Music Theory", "addable": "no"},
    {"name": "Teresa", "liveschoolName": "Teresa Mingxun Jiang", "house": "Green", "birthdate": "2011-02-10", "altName": "Teresa", "class": "AP Music Theory", "addable": "no"},
    {"name": "Thomas", "liveschoolName": "Thomas Hongyi Long", "house": "Red", "birthdate": "2008-02-12", "altName": "Thomas", "class": "AP Music Theory", "addable": "no"},
    {"name": "Calvin", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "2010-04-21", "altName": "Calvin", "class": "AP Music Theory", "addable": "no"},
    {"name": "William", "liveschoolName": "William Zhiwen Zheng", "house": "Yellow", "birthdate": "2010-11-21", "altName": "William", "class": "AP Music Theory", "addable": "no"},
    
    //MS Band
    {"name": "Jacky", "liveschoolName": "Jacky Tsz Hin Cheung", "house": "Green", "birthdate": "2014-08-30", "altName": "Jacky", "class": "MS Band", "instrumentPart": "Violin2", "chair": "5", "addable": "yes"},
    {"name": "Rebecca", "liveschoolName": "Rebecca Tsz Yin Cheung", "house": "Blue", "birthdate": "2012-05-28", "altName": "Rebecca", "class": "MS Band", "instrumentPart": "Violin1", "chair": "4", "addable": "yes"},
    {"name": "Anton", "liveschoolName": "Anton Jiayu Ding", "house": "Green", "birthdate": "2014-09-15", "altName": "Anton", "class": "MS Band", "instrumentPart": "Trumpet", "chair": "3", "addable": "yes"},
    {"name": "Daniel D", "liveschoolName": "Daniel Zeyang Dou", "house": "Blue", "birthdate": "2014-12-19", "altName": "Daniel", "class": "MS Band", "instrumentPart": "Trumpet", "chair": "5", "addable": "yes"},
    {"name": "Shine", "liveschoolName": "Shine Yu Duan", "house": "Blue", "birthdate": "2013-02-14", "altName": "Shine", "class": "MS Band", "instrumentPart": "Violin1", "chair": "2", "addable": "yes"},
    {"name": "Oscar", "liveschoolName": "Oscar Xinchen Fang", "house": "Red", "birthdate": "2013-03-20", "altName": "Oscar", "class": "MS Band", "instrumentPart": "Violin1", "chair": "3", "addable": "yes"},
    {"name": "Matthew", "liveschoolName": "Matthew Enhao Feng", "house": "Yellow", "birthdate": "2013-12-16", "altName": "Matthew", "class": "MS Band", "instrumentPart": "Violin2", "chair": "7", "addable": "yes"},
    {"name": "Felix", "liveschoolName": "Felix Jiaxi Hong", "house": "Blue", "birthdate": "2012-01-11", "altName": "Felix", "class": "MS Band", "instrumentPart": "Cello2", "chair": "6", "addable": "yes"},
    {"name": "Francis", "liveschoolName": "Francis Liu", "house": "Blue", "birthdate": "2013-01-31", "altName": "Francis", "class": "MS Band", "instrumentPart": "Alto Sax", "chair": "2", "addable": "yes"},
    {"name": "Coco", "liveschoolName": "Coco Yuguo Luo", "house": "Yellow", "birthdate": "2013-09-30", "altName": "Coco", "class": "MS Band", "instrumentPart": "Viola", "chair": "2", "addable": "yes"},
    {"name": "Jeffrey", "liveschoolName": "Jeffrey Nie", "house": "Blue", "birthdate": "2015-01-28", "altName": "Jeffrey", "class": "MS Band", "instrumentPart": "Alto Sax", "chair": "3", "addable": "yes"},
    {"name": "Stella S", "liveschoolName": "Stella Yizhi Shang", "house": "Green", "birthdate": "2012-02-29", "altName": "Stella", "class": "MS Band", "instrumentPart": "Cello1", "chair": "1", "addable": "yes"},
    {"name": "Jason", "liveschoolName": "Jason Junfeng Shen", "house": "Red", "birthdate": "2014-12-11", "altName": "Jason", "class": "MS Band", "instrumentPart": "Flute", "chair": "4", "addable": "yes"},
    {"name": "Kyla", "liveschoolName": "Kyla Shi", "house": "Red", "birthdate": "2013-03-25", "altName": "Kyla", "class": "MS Band", "instrumentPart": "Cello1", "chair": "2", "addable": "yes"},
    {"name": "Austen", "liveschoolName": "Austen Lihan Xie", "house": "Yellow", "birthdate": "2013-01-02", "altName": "Austen", "class": "MS Band", "instrumentPart": "Cello2", "chair": "5", "addable": "yes"},
    {"name": "Kyra", "liveschoolName": "Kyra Jiaqi Yan", "house": "Yellow", "birthdate": "2012-12-08", "altName": "Kira", "class": "MS Band", "instrumentPart": "Viola", "chair": "2", "addable": "yes"},
    {"name": "Zachary", "liveschoolName": "Zachary Yang", "house": "Green", "birthdate": "2012-12-29", "altName": "Zachary", "class": "MS Band", "instrumentPart": "Trumpet", "chair": "2", "addable": "yes"},
    {"name": "Grant", "liveschoolName": "Grant Zhang", "house": "Green", "birthdate": "2014-02-11", "altName": "Grant", "class": "MS Band", "instrumentPart": "Violin2", "chair": "6", "addable": "yes"},

    //HS Band
    {"name": "Anne", "liveschoolName": "Anne Jiayue An", "house": "Green", "birthdate": "2010-02-07", "altName": "Anne", "class": "HS Band", "instrumentPart": "Trumpet", "chair": "3", "addable": "yes"},
    {"name": "Sophie", "liveschoolName": "Sophie Geng", "house": "Blue", "birthdate": "2011-07-25", "altName": "Sophie", "class": "HS Band", "instrumentPart": "Horn", "chair": "2", "addable": "yes"},
    {"name": "Ronald", "liveschoolName": "Ronald Li", "house": "Green", "birthdate": "", "altName": "Ronald", "class": "HS Band", "instrumentPart": "Piano", "chair": "1", "addable": "yes"},
    {"name": "Tyler", "liveschoolName": "Tyler Xiang Li", "house": "Red", "birthdate": "2010-06-24", "altName": "Tyler", "class": "HS Band", "instrumentPart": "Clarinet", "chair": "3", "addable": "yes"},
    {"name": "Kerry", "liveschoolName": "Kerry Liu", "house": "Green", "birthdate": "2011-06-13", "altName": "Kerry", "class": "HS Band", "instrumentPart": "Flute", "chair": "1", "addable": "yes"},
    {"name": "June", "liveschoolName": "June Ziqiao Qin", "house": "Blue", "birthdate": "2011-06-18", "altName": "June", "class": "HS Band", "instrumentPart": "Flute", "chair": "3", "addable": "yes"},
    {"name": "Jesse", "liveschoolName": "Jesse Junxi Zeng", "house": "Blue", "birthdate": "2010-04-21", "altName": "Jesse", "class": "HS Band", "instrumentPart": "Percussion", "chair": "2", "addable": "yes"},
    {"name": "Calvin", "liveschoolName": "Calvin Zihao Zhang", "house": "Blue", "birthdate": "2012-05-14", "altName": "Calvin", "class": "HS Band", "instrumentPart": "Tuba", "chair": "1", "addable": "yes"},

    //all others
    {"name": "Rene", "liveschoolName": "Rene King Hei Tang", "house": "Red", "birthdate": "2013-03-28", "altName": "Rene", "instrumentPart": "Contrabass", "chair": "2", "addable": "yes"},
    {"name": "Grace", "liveschoolName": "Grace Leqi Xiong", "house": "Red", "birthdate": "2013-01-19", "altName": "Grace", "instrumentPart": "Violin3", "chair": "5"},
    {"name": "Nancy", "liveschoolName": "Nancy Han", "house": "Yellow", "birthdate": "2013-07-16", "altName": "Nancy", "instrumentPart": "Violin3", "chair": "4"},
    {"name": "Hannah", "liveschoolName": "Hannah Ruihan Chen", "house": "Yellow", "birthdate": "2013-01-19", "altName": "Hannah", "instrumentPart": "Clarinet", "chair": "7"},
    {"name": "Andy", "liveschoolName": "Andy Xuanyu Feng", "house": "Green", "birthdate": "2012-01-13", "altName": "Andy", "instrumentPart": "Violin2", "chair": "3"},
    {"name": "Aurora", "liveschoolName": "Aurora Yingxi Zhong", "house": "Yellow", "birthdate": "2013-02-27", "altName": "Aurora", "instrumentPart": "Percussion", "chair": "3"},
    {"name": "Tiger", "liveschoolName": "Tiger Si Cheng Hou", "house": "Green", "birthdate": "2009-03-23", "altName": "Tiger", "instrumentPart": "Percussion", "chair": "2"},
    {"name": "Henry", "liveschoolName": "Henry Shi", "house": "Red", "birthdate": "2009-09-10", "altName": "Henry", "instrumentPart": "Clarinet", "chair": "1"},
    {"name": "Luna", "liveschoolName": "Luna Mingxi Zhan", "house": "Red", "birthdate": "2009-07-08", "altName": "Luna", "instrumentPart": "Contrabass", "chair": "1"},
    {"name": "Jim", "liveschoolName": "Jim Zi Jing Zheng", "house": "Yellow", "birthdate": "2009-02-16", "altName": "Jimm", "instrumentPart": "Clarinet", "chair": "2"},
    {"name": "Owen", "liveschoolName": "Owen Qizhiyaun He", "house": "Green", "birthdate": "2012-11-30", "altName": "Owen", "instrumentPart": "Trumpet", "chair": "3"},
    {"name": "Daniel H", "liveschoolName": "Daniel Tianyu He", "house": "Blue", "birthdate": "2009-09-04", "altName": "Daniel", "instrumentPart": "Trombone", "chair": "1"},
    {"name": "Agu", "liveschoolName": "Agu Zi-Zhen Huang", "house": "Yellow", "birthdate": "2008-11-01", "altName": "Aagoo", "instrumentPart": "Alto Sax", "chair": "3"},
    {"name": "Michael", "liveschoolName": "Michael Bao Shen Chen", "house": "Blue", "birthdate": "2008-12-25", "altName": "Michael", "instrumentPart": "Alto Sax", "chair": "4"},
    {"name": "Steve", "liveschoolName": "Steve Ruiming Zheng", "house": "Blue", "birthdate": "", "altName": "Steve", "instrumentPart": "Bass Clarinet", "chair": "3"},
    {"name": "Ben", "liveschoolName": "Ben Luyue Chen", "house": "Yellow", "birthdate": "2007-12-17", "altName": "Ben", "instrumentPart": "Percussion", "chair": "4"},
    {"name": "Kevin J", "liveschoolName": "Kevin Jincheng Jiao", "house": "Blue", "birthdate": "", "altName": "Kevin J", "instrumentPart": "Bass Clarinet", "chair": "1"},
    {"name": "Mianmian", "liveschoolName": "Mianmian Mingxuan Lyu", "house": "Red", "birthdate": "2013-03-01", "altName": "Mienn Mienn", "instrumentPart": "Flute", "chair": "3"},
    {"name": "Karen", "liveschoolName": "Karen Hou", "house": "Blue", "birthdate": "2012-09-24", "altName": "Karen", "instrumentPart": "Flute", "chair": "4"},
    {"name": "LiPai", "liveschoolName": "Pai Li", "house": "Yellow", "birthdate": "", "altName": "LiPai", "instrumentPart": "Cello2", "chair": "4"},
    {"name": "Alan Wen", "liveschoolName": "Alan Tianlin Wen", "house": "Yellow", "birthdate": "", "altName": "Alan", "instrumentPart": "Flute", "chair": "2"},
    {"name": "Ivan", "liveschoolName": "Ivan Yan Zhi Lin", "house": "Green", "birthdate": "", "altName": "Ivan", "instrumentPart": "Percussion", "chair": "1"},
    {"name": "Allen Yu", "liveschoolName": "Allen Kwun Ting Yu", "house": "Yellow", "birthdate": "", "altName": "Allen", "instrumentPart": "Violin2", "chair": "3"},
    {"name": "Alex", "liveschoolName": "Alex Tsz To Huang", "house": "Blue", "birthdate": "", "altName": "Alex", "instrumentPart": "Violin1", "chair": "1"},
    {"name": "Emily", "liveschoolName": "Emily Xuan Tong Ke", "house": "Yellow", "birthdate": "", "altName": "Emily", "instrumentPart": "Violin2", "chair": "1"},
    {"name": "Fiona", "liveschoolName": "Fiona Fang", "house": "Blue", "birthdate": "", "altName": "Fiona", "instrumentPart": "Violin3", "chair": "4"},
    {"name": "Mandy", "liveschoolName": "Mandy Ming Luo", "house": "Green", "birthdate": "", "altName": "Mandy", "instrumentPart": "Cello2", "chair": "4"},
    {"name": "Sebastian", "liveschoolName": "Sebastian Andresen", "house": "Yellow", "birthdate": "", "altName": "Sebastian", "instrumentPart": "Percussion", "chair": "5"},
    {"name": "Esther", "liveschoolName": "Esther Sicong Chen", "house": "Green", "birthdate": "", "altName": "Esther", "instrumentPart": "Percussion", "chair": "6"},
    {"name": "Christi", "liveschoolName": "Christi Yawen Zhu", "house": "Yellow", "birthdate": "", "altName": "Christi", "instrumentPart": "Horn", "chair": "1"},
    {"name": "Odelia", "liveschoolName": "Odelia Yunhan Xie", "house": "Green", "birthdate": "", "altName": "Odelia", "instrumentPart": "Violin3", "chair": "3"},
    {"name": "Yvonne", "liveschoolName": "Yvonne Yamsiu Wu", "house": "Yellow", "birthdate": "", "altName": "Yvonne", "class": "HS Band", "instrumentPart": "Cello2", "chair": "3", "addable": "Yes"},
    {"name": "Maggie", "liveschoolName": "Maggie Gan", "house": "Red", "birthdate": "", "altName": "Maggie", "class": "HS Band", "instrumentPart": "Contrabass", "chair": "3", "addable": "Yes"},
    {"name": "Teresa", "liveschoolName": "Teresa Mingxun Jiang", "house": "Green", "birthdate": "", "altName": "Teresa", "class": "HS Band", "instrumentPart": "Cello3", "chair": "3", "addable": "Yes"},
    {"name": "Vanessa", "liveschoolName": "Vanessa Chen", "house": "Green", "birthdate": "", "altName": "Vanessa", "class": "HS Band", "instrumentPart": "Violin1", "chair": "4", "addable": "Yes"},
    {"name": "Annie", "liveschoolName": "Annie Xiaoqi Feng", "house": "Blue", "birthdate": "", "altName": "Annie", "class": "HS Band", "instrumentPart": "Violin1", "chair": "5", "addable": "Yes"},
    {"name": "Ming Hon", "liveschoolName": "Ming Hon Li", "house": "Red", "birthdate": "", "altName": "Ming Hon", "class": "HS Band", "instrumentPart": "Clarinet2", "chair": "3", "addable": "Yes"},

    {"name": "Mr. Tubbs", "liveschoolName": "Francis Liu", "house": "Blue", "birthdate": "1990-08-29", "altName": "Mr. Tubbs", "class": "None", "addable": "yes"},
];


const techTheaterStudents = [
    'Fiona', 'Julius', 'Vlan', 'Beryl', 'Allen', 'Yolanda', 'Stella', 'Cynthia', 'Yaffa', 'Kenny', 'Eric', 'Harry', 'Aaliyah', 'Rachelle', 'Kevin', 'Sophie', 'Ricky'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'UNX',
        devices: false,
        engagement: false,
        review: false,
        progress: false,
        housePoints: 0
    };
});

const techTheaterTeacherModeOrder = ['Fiona', 'Julius', 'Vlan', 'Beryl', 'Allen', 'Yolanda', 'Stella', 'Cynthia', 'Yaffa', 'Kenny', 'Eric', 'Harry', 'Aaliyah', 'Rachelle', 'Kevin', 'Sophie', 'Ricky'];


const techTheaterSeniorProjects = ['Fiona', 'Julius', 'Vlan', 'Beryl', 'Allen', 'Yolanda', 'Stella', 'Cynthia', 'Yaffa', 'Kenny', 'Eric', 'Harry', 'Aaliyah', 'Rachelle', 'Kevin', 'Sophie', 'Ricky']



const aeStudents = [
    'Shawn', 'Arianna', 'Bella', 'Rebecca', 'Shine', 'Jonathan', 'Olivia', 'Kim', 'Phyllis', 'Laura', 'Andy', 'Kyla', 'Amanda', 'Damon', 'Steve', 'Daisy', 'Jason', 'Austen', 'Elon', 'Eva', 'William', 'Molly', 'Lucky', 'Jerry', 'Bob'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        devices: false,
        engagement: false,
        review: false,
        progress: false,
        housePoints: 0
    };
});

const aeTeacherModeOrder = ['Shawn', 'Arianna', 'Bella', 'Rebecca', 'Shine', 'Jonathan', 'Olivia', 'Kim', 'Phyllis', 'Laura', 'Andy', 'Kyla', 'Amanda', 'Damon', 'Steve', 'Daisy', 'Jason', 'Austen', 'Elon', 'Eva', 'William', 'Molly', 'Lucky', 'Jerry', 'Bob'];




const apMusicTheoryStudents = [
   'Jocelyn', 'Maggie', 'Alex', 'Teresa', 'Thomas', 'Calvin', 'William'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        devices: false,
        engagement: false,
        review: false,
        progress: false,
        housePoints: 0
    };
});

const apMusicTheoryTeacherModeOrder = ['Jocelyn', 'Maggie', 'Alex', 'Teresa', 'Thomas', 'Calvin', 'William'];


const apMusicTheorySeniorProjects = ['Thomas']



const msBandStudents = [
   'Jacky', 'Rebecca', 'Anton', 'Daniel D', 'Shine', 'Oscar', 'Matthew', 'Felix', 'Francis', 'Coco', 'Jeffrey', 'Stella S', 'Jason', 'Kyla', 'Austen', 'Kyra', 'Zachary', 'Grant'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        stands: false,
        ipads: false,
        returned: false,
        engagement: false,
        housePoints: 0
    };
});

const msBandTeacherModeOrder = ['Jacky', 'Rebecca', 'Anton', 'Daniel D', 'Shine', 'Oscar', 'Matthew', 'Felix', 'Francis', 'Coco', 'Jeffrey', 'Stella S', 'Jason', 'Kyla', 'Austen', 'Kyra', 'Zachary', 'Grant'];




const msBandThursdayStudents = [
    'Jacky', 'Rebecca', 'Shine', 'Oscar', 'Matthew', 'Felix', 'Francis', 'Coco', 'Stella S', 'Kyla', 'Austen', 'Kyra', 'Zachary', 'Grant'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        stands: false,
        ipads: false,
        returned: false,
        engagement: false,
        housePoints: 0
    };
});

const msBandThursdayTeacherModeOrder = ['Jacky', 'Rebecca', 'Shine', 'Oscar', 'Matthew', 'Felix', 'Francis', 'Coco', 'Stella S', 'Kyla', 'Austen', 'Kyra', 'Zachary', 'Grant'];





const hsBandStudents = [
   'Anne', 'Sophie', 'Tyler', 'Kerry', 'Ronald', 'June', 'Jesse', 'Calvin'
].map(name => {
    const studentInfo = masterList.find(s => s.name === name);
    return {
        name,
        birthdate: studentInfo ? studentInfo.birthdate : null,
        score: 'EX',
        attendance: 'Absent',
        stands: false,
        ipads: false,
        returned: false,
        engagement: false,
        housePoints: 0
    };
});

const hsBandTeacherModeOrder = ['Anne', 'Sophie', 'Tyler', 'Kerry', 'Ronald', 'June', 'Jesse', 'Calvin'];