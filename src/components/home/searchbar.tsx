import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { SearchIcon } from 'lucide-react';

const SearchBar = () => {
  return (
    <>
      <div className='item-center flex gap-2'>
        <Input placeholder='Procurar uma barbearia...' />
        <Button variant={'default'}>
          <SearchIcon size={18} />
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
