import React from 'react';

export default function Header() {
  return (<>
  <h1 className="text-center text-warning mt-3 mb-4">CoinMaster</h1>
  <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
  </>
    
  )
}
