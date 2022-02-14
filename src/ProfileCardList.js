import ProfileCard from "./ProfileCard"

const ProfileCardList = ({ Cats }) => {
    return (
        <div className="d-flex  flex-wrap " >
            {
                Cats.map( (Cat,i) => {
                    return <ProfileCard key={Cats[i].id} id={Cats[i].id} name={Cats[i].name} email={Cats[i].email} />
                })
            }
        </div>
    )
}

export default ProfileCardList ;