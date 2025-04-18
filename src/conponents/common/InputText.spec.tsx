import { render, screen } from "@testing-library/react"; 
import InputText from './InputText'
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("InputText 컴포넌트 테스트", () => {
    it('렌더를 확인', () => {
        //1 렌더
        render(
            <BookStoreThemeProvider>
                <InputText placeholder="여기에 입력" />
            </BookStoreThemeProvider>)

        //2 확인
        expect(screen.getByPlaceholderText('여기에 입력')).toBeInTheDocument();
    });
});