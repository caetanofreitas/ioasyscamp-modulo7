import Header from '../../components/Header';
import Card from '../../components/Card';
import * as S from './Home.style';

import books from '../../mocks/books.json';

const Home = () => {
  return (
    <S.Container>
      <Header mode="dark" />
      <S.Content>
        <S.CardsContainer>
          {books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </S.CardsContainer>
      </S.Content>
    </S.Container>
  );
}

export default Home;
