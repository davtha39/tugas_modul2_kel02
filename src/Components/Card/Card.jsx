import React from "react";
import styled from 'styled-components';

const Container = styled.div`
background-color: #c1cfc0;
border-radius: 30px;
box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
color: #B3B8CD;
position: relative;
width: 50%;
margin: auto;
margin-top: 150px;
@media screen and (max-width: 500px) {
       margin: auto;
}
`
const Image = styled.img`
  border: 10px solid #ffffff;
  border-radius: 50%;
  width: 60%;
  height: auto;
  margin: 20px;
  font-family: Gill Sans MT;
`
const Title = styled.h5`
  margin: auto;
  color:black;
  font-family: Gill Sans MT;
`
const Pilihan = styled.select`
	font-size: 16px;
	font-family: Gill Sans MT;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .2em 1em;
	width: 40%;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .7em;
	appearance: none;
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    margin: 30px
`
const Rowcard = styled.div
`
    display: table;
    width: 100%;
    table-layout: fixed;
    border-spacing: 0px;
    text-align: center;
`

const ColumnCard = styled.div
`
    display: table-cell;
    text-align: center;

`

function Card(props){
    return(
        <div>
            <Image src={props.pict}/><br/>
            <a>{props.nama}</a><br/>
            <a>{props.nim}</a><br/>
            <a>{props.kelompok}</a><br/><br/>
            <a>{props.quotes}</a><br/>
        </div>

    )
}

export default function index() {
  return (

      <Rowcard>
          <ColumnCard>
          <Container>
            <Title>
                <Card nama="Davi Ilza Athallah" nim="21120118130072" kelompok="Kelompok 02" quotes="Si vis pacem, para bellum" pict="https://i.ibb.co/JRJ81M4/davi.jpg"/>
            </Title>
            <Pilihan>
                <option value="0">Pilih?</option>
                <option value="1">Ya</option>
                <option value="2">Tidak</option>
            </Pilihan>
            </Container>
          </ColumnCard>
          <ColumnCard>
          <Container>
            <Title>
                <Card nama="Muhammad Amri Hakim" nim="21120118140044" kelompok="Kelompok 02" quotes="Man jadda wa jadda"pict="https://i.ibb.co/h8TLz8C/amri.jpg"/>
            </Title>
            <Pilihan>
                <option value="0">Pilih?</option>
                <option value="1">Ya</option>
                <option value="2">Tidak</option>
            </Pilihan>
            </Container>
          </ColumnCard>
      </Rowcard>
    
  );
}