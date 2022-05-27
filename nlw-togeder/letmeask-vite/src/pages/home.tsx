export function Home() {

  return (
    <div>
      <aside>
        <img src="/assets/images/illustration.svg" alt="Illustration of questions and answers" />
        <strong>Every question has an answer</strong>
        <p>Learn and share knowledge with other people</p>
      </aside>
      <main>
        <div>
          <img src="/assets/images/logo.svg" alt="Letmeask" />
          <button>
            <img src="/assets/images/google-icon.svg" alt="Google logo" />
            Create your room with Google
          </button>
          <div>or enter a room</div>
          <form>
            <input 
              type="text" 
              placeholder="Enter room code" 
            />
            <button type="submit">
              <img src="/assets/images/log-in.svg" alt="Enter icon" />
              Enter the room
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}