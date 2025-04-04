import React from 'react'

export const Home = () => {
  return (
    <div className='container my-5 ms-auto text-dark'>

      <h1>One morning, when Gregor Samsa woke from troubled
        dreams.</h1>


      <h2>The bedding was hardly able to cover it.</h2>


      <ul>
        <li>Lorem ipsum dolor sit amet consectetuer.</li>
        <li>Aenean commodo ligula eget dolor.</li>
        <li>Aenean massa cum sociis natoque penatibus.</li>
      </ul>


      <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aenean commodo ligula eget dolor. Aenean
          massa.</li>
        <li>Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis,
          sem.</li>
        <li>Nulla consequat massa quis enim. Donec pede justo,
          fringilla vel, aliquet nec, vulputate eget, arcu.</li>
        <li>In enim justo, rhoncus ut, imperdiet a, venenatis
          vitae, justo. Nullam dictum felis eu pede mollis
          pretium. Integer tincidunt.</li>
      </ul>


      <p>One morning, when Gregor Samsa woke from troubled
        dreams, he found himself transformed in his bed into
        a horrible vermin. He lay on his armour-like back,
        and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into
        stiff sections. The bedding was hardly able to cover
        <strong>strong</strong> it and seemed ready to slide
        off any moment. His many legs, pitifully thin
        compared with the size of the rest of him,
        <a class="external ext" href="#">link</a> waved about
        helplessly as he looked. "What's happened to me? " he
        thought. It wasn't a dream. His room, a proper human
        room although a little too small, lay peacefully
        between its four familiar walls.</p>


      <p>It showed a lady fitted out with a fur hat and fur
        boa who sat upright, raising a heavy fur muff that
        covered the whole of her lower arm towards the
        viewer.</p>


      <h3>A collection of textile samples lay spread out
        on the table.</h3>


      <h5>Donec pede justo fringilla vel aliquet nec
        vulputate eget arcu</h5>


      <blockquote>
        Gregor then turned to look out the window at the dull
        weather. Drops of rain could be heard hitting the pane,
        which made him feel quite sad. "How about if I sleep a
        little bit longer and forget all this nonsense", he
        thought, but that was something he was unable to do
        because he was used to sleeping on his right, and in
        his present state couldn't get into that position.
        However hard he threw himself onto his right, he
        always rolled back to where he was.
      </blockquote>



      <div className="container d-flex flex-column bg-red">
        <form action="#" method="post" >
          <fieldset className=" d-flex flex-column bg-red gy-2">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your full name" />

            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email address" />

            <label for="message">Message:</label>
            <textarea id="message" placeholder="What's on your mind?"></textarea>

            <input type="submit" value="Send message" />

          </fieldset>
        </form>
      </div>


      <div className="container">
        <table class="data table table-bordered ">
          <tr>
            <th>Entry Header 1</th>
            <th>Entry Header 2</th>
            <th>Entry Header 3</th>
            <th>Entry Header 4</th>
          </tr>
          <tr>
            <td>Entry First Line 1</td>
            <td>Entry First Line 2</td>
            <td>Entry First Line 3</td>
            <td>Entry First Line 4</td>
          </tr>
          <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
          </tr>
          <tr>
            <td>Entry Last Line 1</td>
            <td>Entry Last Line 2</td>
            <td>Entry Last Line 3</td>
            <td>Entry Last Line 4</td>
          </tr>
        </table>
      </div>



    </div>
  )
}
