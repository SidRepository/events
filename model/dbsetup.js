const collection=require('../utilities/connection');
const EmployeeDatabase=[
    {
        
        staffId:100001,
        firstName:"Noble",
        lastName:"Jose",
        password:"abcd1234"
    },
    {
       
        staffId:100002,
        firstName:"Varshae",
        lastName:"M",
        password:"vxyz1234"
    }
]

exports.setupDb=()=>{
    return collection.getEmployeeCollection().then((emp)=>{
        return emp.deleteMany().then(()=>{return emp.insertMany(EmployeeDatabase).then((data)=>{
            if(data){
                return "Insertion Succcessful"
            }
            else{
                let err=new Error("Insertion Failed");
                err.status=400;
                throw err;
            }
        })})
    })
}


const EventDatabase=[
    {
        "location": {
            "lattitude": "18.567",
            "longitude": "16.88"
        },
        "eventId": 3,
        "title": "yoga",
        "description": "yoga class",
        "eventDate": "2020-09-01 09:01:15",
        "empId": "1",
        "rewardPoints": "5"
    },
    {
        "location": {
            "lattitude": "18.567",
            "longitude": "16.88"
        },
        "eventId": 2,
        "title": "cycle",
        "description": "cycle class",
        "eventDate": "2020-09-01 09:01:15",
        "empId": "1",
        "rewardPoints": "10"
    },
    {
        "location": {
            "lattitude": "18.567",
            "longitude": "16.88"
        },
        "eventId": 1,
        "title": "kungfu",
        "description": "fight class",
        "eventDate": "2020-09-01 09:01:15",
        "empId": "1",
        "rewardPoints": "10"
    }
]

exports.eventSetupDb=()=>{
    return collection.getEventCollection().then((event)=>{
        return event.deleteMany().then(()=>{return event.insertMany(EventDatabase).then((data)=>{
            if(data){
                return "Insertion Succcessful";
            }
            else{
                let err=new Error("Insertion Failed");
                err.status=400;
                throw err;
            }
        })})
    })
}
