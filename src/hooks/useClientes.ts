import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../firebase/db/ColecaoCliente"
import useTabelaOuForm from "./useTabelaouForm"

export default function useClientes(){

    const {tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()
    const repo: ClienteRepositorio = new ColecaoCliente()
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
  
    useEffect(obterTodos, [])
    
    function obterTodos(){
      
      repo.obterTodos().then(clientes =>{
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function selecionarCliente(cliente:Cliente){
      setCliente(cliente)
      exibirFormulario()
    }
  
    async function excluirCliente(cliente:Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }
  
    async function salvarCliente(cliente:Cliente){
      await repo.salvar(cliente)
      obterTodos()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio())
      exibirFormulario()
    }    

    return{
        tabelaVisivel,
        exibirTabela, 
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos
    }
}